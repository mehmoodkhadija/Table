import React from 'react';
class App extends React.Component {
      renderTableHeader() {
        // Replace 'Header 1', 'Header 2', etc. with your actual header names
        return (
          <tr>
            <th>Sr</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Marks</th>
          </tr>
        );
      }
    
      renderTableData() {
        // Replace the data below with your actual data
        const tableData = [
          { column1: 1, column2: 'Aqsa',column3: 'zain', column4: 55 },
          { column1: 2, column2: 'Talha',column3: 'noman', column4: 50 },
          { column1: 3, column2: 'Ali',column3: 'mehmmod', column4: 45 },
          { column1: 4, column2: 'uzma', column3: 'mehmood',column4: 70 },
          // Add more rows as needed
        ];
    
        return tableData.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            <td>{row.column4}</td>
          </tr>
        ));
      }
    
      render() {
        return (
          <div className='mt-5'>
            <h2>Table</h2>
            <table className='table'>
              <thead>{this.renderTableHeader()}</thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        );
      }
    }

    
export default App;


