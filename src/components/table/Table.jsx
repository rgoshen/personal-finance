import React from 'react';
import './Table.css';

export default function Table() {
  return (
    <>
      <table className='checking-table'>
        <tr className='header'>
          <th>Date</th>
          <th>Account</th>
          <th>Payee</th>
          <th>Memo</th>
          <th>Category</th>
          <th>Payment</th>
          <th>Deposit</th>
          <th>Total</th>
          <th></th>
        </tr>
        <tr>
          <td>1-20-2023</td>
          <td></td>
          <td>Starting</td>
          <td></td>
          <td>Expense</td>
          <td> - </td>
          <td> $200.00 </td>
          <td>$200.00</td>
        </tr>
        <tr>
          <td>1-21-2023</td>
          <td>Something</td>
          <td>Whoever</td>
          <td>test</td>
          <td>Expense</td>
          <td>$10.00</td>
          <td> - </td>
          <td>$190.00</td>
        </tr>
        <tr>
          <td>1-21-2023</td>
          <td>Something</td>
          <td>Whoever</td>
          <td>test</td>
          <td>Expense</td>
          <td>$20.00</td>
          <td> - </td>
          <td>$170.00</td>
        </tr>
        <tr>
          <td>1-21-2023</td>
          <td>Something</td>
          <td>Whoever</td>
          <td>test</td>
          <td>Expense</td>
          <td>$ - </td>
          <td> $100.00 </td>
          <td>$270.00</td>
        </tr>
      </table>
    </>
  );
}
