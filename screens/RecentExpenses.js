import { useContext } from "react"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpenseContext } from "../store/Expense-context"
import { getDateMinusDays } from "../utils/date"


function RecentExpenses() {
    const expenseCtx = useContext(ExpenseContext)

    const recentExpenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today,7);

        return expense.date > date7DaysAgo && expense.date <= today;

    })
    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="No expenses for the last 7 days" />
    );
}

export default RecentExpenses