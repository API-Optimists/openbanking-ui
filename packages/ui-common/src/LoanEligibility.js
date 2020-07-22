import React from 'react'
import './InfoDisplay.css'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'reactstrap';
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
  } from '@openbanking/ui-data/lib/services/account-service'

export default function LoanEligibility(props) {
    if (!props.data) {
        return null
    }
   
    const dispatch = useDispatch()
    
    
    var data=props.data;
    var totalYearlyCredit=0;
    var totalYearlyDebit=0;
    var currBalance=0;
    data.map((item, index)=>{
        currBalance=currBalance+item.Balance;
        totalYearlyCredit=totalYearlyCredit+item.YearlyCredit;
        totalYearlyDebit=totalYearlyDebit+item.YearlyDebit;

     
    });
    console.log(currBalance+" "+totalYearlyCredit+" "+totalYearlyDebit);
    
    //calculating loan eligibility part
    
    var loanEligibleFor=(0.9*currBalance)+totalYearlyCredit-totalYearlyDebit;
    console.log("Loan eligible"+ loanEligibleFor);

    if(loanEligibleFor>0)
return <Alert color="success">
<h1>Eligible for loan with the amount £{loanEligibleFor}</h1></Alert>
else
return <Alert color="danger"><h2>Sorry, based on your transactions, you are not eligible for any loan currently</h2></Alert>
    
        
}