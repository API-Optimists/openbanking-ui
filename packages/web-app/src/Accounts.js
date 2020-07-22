import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getCredibility,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import './Accounts.css'

//accounts api list
const Accounts = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)
    console.log(data);
    const dispatch = useDispatch()

    return (
        <div className="mainContainer">
            <h2 className="pageTitle">AISP Information</h2>
            <div className="apiContainer">
                <div className="btnContainer">
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountList(dispatch)}
                    >
                        Get Account List
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountById(dispatch, accountId)}
                    >
                        Get Account By Id
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => getAccountBalances(dispatch, accountId)}
                    >
                        Get Account Balances
                    </button>
                    
                    <button
                        className="buttonLinks"
                        onClick={() =>
                            getAccountTransactions(dispatch, accountId)
                        }
                    >
                        Get Account Transactions
                    </button>
                    <button
                        className="buttonLinks"
                        onClick={() => getCredibility(dispatch)}
                    >
                        Check loan eligibility criteria
                    </button>
                    
                </div>
                <div className="displayInfo">
                    <InfoDisplay data={data} />
                </div>
            </div>
        </div>
    )
}

export default Accounts
