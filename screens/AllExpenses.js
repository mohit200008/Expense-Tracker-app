import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/Expense-context'


function AllExpenses() {
    const expensesCtx = useContext(ExpenseContext);

    return (
        <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No expenses found" />
    );
}

export default AllExpenses