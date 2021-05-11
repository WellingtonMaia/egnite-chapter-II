import { useTransactions } from "../../hooks/useTransactions";
import { NumberFormat } from "../../utils/number-format";
import { Container } from "./style";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map(transaction => (
            <tr key={ transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}> 
                { transaction.type === 'withdraw' ? '-': ''} 
                  { NumberFormat(transaction.amount) }
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt))}
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </Container>
  )
}