import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { NumberFormat } from '../../utils/number-format';

import {Container} from './style';

export function Summary() {
  const { transactions } = useTransactions();
  
  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }
  //   return acc;
  // }, 0);

  const summary = transactions.reduce((acc, transaction) => {
    if ( transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{NumberFormat(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {NumberFormat(summary.withdraws)}</strong>
      </div>
      <div className="highlight-backgound">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{NumberFormat(summary.total)}</strong>
      </div>
    </Container>
  );
}