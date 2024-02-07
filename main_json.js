const ExcelJS = require('exceljs');
const fs = require('fs');

// Function to convert Excel file to JSON
async function excelToJSON(inputFile, outputFile) {
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(inputFile);

        const worksheet = workbook.getWorksheet(1); // Assuming the data is in the first sheet

        const jsonData = [];
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber !== 1) { // Skip header row
                const rowData = {};
                row.eachCell((cell, colNumber) => {
                    rowData[`column${colNumber}`] = cell.value;
                });
                jsonData.push(rowData);
            }
        });

        // Write JSON to file
        fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
        console.log('Conversion to JSON successful!');
    } catch (error) {
        console.error('Error converting Excel to JSON:', error);
    }
}

// Specify your input Excel file and output JSON file
const inputExcelFile = 'input.xlsx';
const outputJsonFile = 'output.json';

// Convert Excel to JSON
excelToJSON(inputExcelFile, outputJsonFile);
