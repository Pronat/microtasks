import React, {useState} from 'react';
import './App.css';

type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const[filter,setFilter]=useState<FilterType>('all')

    let currentMoney = money;      //по умолчание равно всем значениям
    //если nameButton==='Dollars'
    if (filter === 'Dollars') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }
    //если nameButton==='RUBLS'
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
    // console.log(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArray.banknots}</span>
                            <span>{objFromMoneyArray.value}</span>
                            <span>{objFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
}

export default App;
