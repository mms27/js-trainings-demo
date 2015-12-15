var columns = ['First Name', 'Last Name', 'Age', 'Occupation'];

var rows = [
    ['Misha', 'Miroshnikov', '24', 'JS Dev'],
    ['Alex', 'Chechuga', '30', 'c# Dev']
];

var newTable = createTable(rows, columns);
document.body.appendChild(newTable);

function createTable(rows, columns) {
    var table = document.createElement('table');

    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    columns.forEach(buildTableColumn);

    rows.forEach(function (columns) {
        var row = document.createElement('tr');
        table.appendChild(row);

        columns.forEach(function (columnText) {
            var cell = document.createElement('td');
            cell.innerText = columnText;

            row.appendChild(cell);
        });
    });

    return table;

    function buildTableColumn(columnTitle) {
        var header = document.createElement('th');
        header.innerText = columnTitle;
        headerRow.appendChild(header);
    }
}