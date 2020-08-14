import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Modal, Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './ViewContract.scss'

class ViewContract extends Component {

    render() {
        return (
            <div className="view-contract-container">
                <Modal trigger={ <Button>View Contract</Button> }>
                    <Header icon="pen square" content="Pretsl Merchant Contract Agreement"/>
                        <Modal.Content>
                            <div className="contract-container">
<p className="contract-page">Page 1: Software
Your software subscription costs:
Software Subscription(1) see details
(Gets data from Paddle)
Software Billing Method
Billed Monthly
Initial Term
(Gets data from paddle)
Contract Start Date(2)
06/30/2020<br/><br/>

(1) Totals above do not include taxes. Prices are estimates and subject to change.
(2) Software billing shall commence on the earlier of (i) the Contract Start Date set forth in this Order and (ii) the Activation Date.
For the avoidance of doubt, this Agreement includes, collectively, (1) this Order Form and (2) the Standard Terms and Conditions referenced below and does not incorporate by reference any other agreements, including a Pretsl Master Agreement (if applicable).<br/><br/>

If Merchant signs up for Pretsl's Gift Card Module, Stripe will be the payments processor for all gift card purchases, and Merchant will be required to agree to Stripe's applicable terms and conditions in order to activate the Module. Pretsl reserves the right to require that Merchant transition to Pretsl’s payment processing services at any time, in its sole discretion.

New Pretsl, Inc. (“Pretsl”) merchant customers who sign Pretsl's Merchant Agreement (“Agreement”) on or before July 30, 2020 (“New Customers”) and meet the below criteria may be eligible to receive the discount set forth below:<br/><br/>

New Customers may be eligible to receive their first three (3) months of Pretsl Now modules as set forth herein for free (each, a “Module”) if they sign up for their selected Module(s) prior to July 30, 2020 (“3 Months Free Promotion”).<br/><br/>

The 3 Months Free Promotion may not be combined with additional subscription discounts or redeemed for cash and may be available only in select markets. Following the first three (3) months free of the Module(s), the fee shall be the full quote price per month until the end of the Term (as defined in the Agreement). This is a limited time offer subject to change. Pretsl reserves the right to suspend, modify, or cancel 3 Months Free Promotion.<br/><br/>

Notwithstanding Section 8.1 of the Merchant Agreement, either party may terminate an Order, and this Agreement with respect to such Order, by providing at least fifteen (15) days’ written notice of its intent to terminate such Order prior to the first of each month. Furthermore, in the event that Merchant executes and goes live on another Order Form for Pretsl products and/or services (including, for example, point-of-sale hardware) (“Additional Pretsl Order Form”), then the terms and conditions contained in the Additional Pretsl Order Form will take precedence and govern over this Prestl Now Order Form, with the exception of the 3 Months Free Promotion, which shall continue to apply until the end of such promotion. In that event, upon completion of the 3 Months Free Promotion, this Prestl Now Order Form shall automatically terminate.
</p>
<p className="contract-page">Pretsl, LLC. (“Pretsl”) merchant customers who sign Pretsl's Merchant Agreement (“Agreement”) on or before July 30, 2020 (“New Customers”) and meet the below criteria may be eligible to receive the discount set forth below:<br/><br/>
​
New Customers may be eligible to receive their first three (3) months of Pretsl’s digital ordering and/or e-gift card modules (each, a “Module”) if they sign up for their selected Module(s) prior to June 30, 2020 (“3 Months Free Promotion”).<br/><br/>

The 3 Months Free Promotion may not be combined with additional subscription discounts or redeemed for cash and may be available only in select markets. Following the first three (3) months free of the Module(s), the fee shall be the full quote price per month until the end of the Term (as defined in the Agreement). This is a limited time offer subject to change. Pretsl reserves the right to suspend, modify, or cancel 3 Months Free Promotion.<br/><br/>

After the Initial Term, as outlined in the Order, the term of this Agreement with respect to such Order Form will automatically renew for successive one (1) month periods (each a "Renewal Term"; collectively, the Initial Term and any subsequent Renewal Term(s) shall be referred to as the “Term”); provided, however, that either party may terminate an Order, and this Agreement with respect to such Order, by providing at least fifteen (15) days’ written notice of its intent not to renew prior to the end of the then-current Term.<br/><br/>

In order to provide Merchant with payment processing services, Pretsl must enter into agreements with the Payment Networks, processors, and acquiring banks. The Payment Networks have set certain Card volume thresholds, which require anyone that processes at or above those thresholds to enter into an agreement directly with one or more of Pretsl’s banking partner(s). These thresholds are as follows: $1,000,000 in Visa transactions and/or $1,000,000 in MasterCard transactions (or such other amount provided by the Operating Regulations) processed in any 12-month period. <br/><br/>

By accepting or otherwise agreeing to these terms, Merchant agrees to the terms and conditions of each applicable Commercial Entity Agreement, located at https://get.Pretsl.com/merchant-service-agreements, as may be amended from time to time, effective as of the date Merchant processes such specified amounts or as otherwise required by Pretsl’s bank partners. If Merchant fails to comply with any “Commercial Entity Agreement”, Pretsl may suspend or terminate Merchant’s Pretsl Account. Similarly, if American Express considers Merchant to be a high value customer, it may require that Merchant enter into a direct agreement with American Express and designate Pretsl as Merchant’s agent for American Express payments. If that is the case, Pretsl will notify Merchant of such requirement.<br/><br/>
</p>
<p className="contract-page">
Link your bank account
Review your credit card processing terms
Visa/Mastercard/Discover
Processing Rate (Swiped or Dipped)
2.4900% + $0.1500
Processing Rate (Keyed)
3.5000% + $0.1500<br/><br/>


American Express

I would like to accept American Express
I process less than $1,000,000 in American Express transactions annually on this Federal Tax ID/EIN
American Express Processing Type
OptBlue
Processing Rate (Swiped or Dipped)
3.2900% + $0.1500
Processing Rate (Keyed)
3.8900% + $0.1500<br/><br/>

Pricing Conditions: Pretsl pricing for VISA, MasterCard and Discover rates are valid only for merchants located in the United States and include Interchange Fees, Dues and Assessments. Your participation in Pretsl payment processing is further subject to the Standard Terms and Conditions, which can be found at get.pretsl.com/merchant-agreement.<br/><br/>

In addition to Merchant's obligations under this Order Form and Merchant Agreement, Merchant's participation in the American Express ("AMEX") Opt Blue Program is contingent upon Merchant's acceptance of, and compliance with, the then-current American Express Merchant Operating Guide, the most recent version of which is available at: https://icm.aexp-static.com/content/dam/gms/en_us/optblue/us-mog.pdf. Only merchants with an Estimated Annual AMEX Volume of $1,000,000 or less are eligible to participate in the OptBlue Program.

If, during Merchant's participation in the OptBlue Program: (i) Merchant's Estimated Annual AMEX Volume exceeds $1,000,000, (ii) Merchants does not meet the eligibility criteria contained in the American Express Merchant Operating Guide, or (iii) for any other reason in AMEX's discretion, and AMEX notifies Pretsl that Merchant has been categorized as a "High CV Merchant," then Merchant will be converted to a "AMEX Direct Merchant" and accordingly will process AMEX transactions directly with AMEX pursuant to the terms and conditions of the then-current American Express Card Acceptance Agreement.<br/><br/>

Pretsl’s payment processing services allow merchants to accept payments from most U.S.-issued credit, debit, prepaid, or gift Cards that bear the official markings of a Payment Network. At any time and without prior notice, Pretsl may add, remove, or change which Cards are considered acceptable.
In order to provide merchants with payment processing services, Pretsl must enter into agreements with the Payment Networks, processors, and acquiring banks. The Payment Networks have set certain Card volume thresholds, which require anyone that processes at or above those thresholds to enter into an agreement directly with one or more of Pretsl’s banking partner(s). These thresholds are as follows: $1,000,000 in Visa transactions and/or $1,000,000 in MasterCard transactions (or such other amount provided by the Operating Regulations) processed in any 12-month period. By accepting or otherwise agreeing to these terms, Merchant agrees to the terms and conditions of each applicable Commercial Entity Agreement, located at https://get.pretsl.com/merchant-service-agreements, as may be amended from time to time, effective as of the date Merchant processes such specified amounts or as otherwise required by Pretsl’s bank partners. If Merchant fails to comply with any “Commercial Entity Agreement”, Pretsl may suspend or terminate Merchant’s Pretsl Account.<br/><br/>
<br/><br/>

<span className="be-bold-plz">Business Legal Name (only special characters & and - are allowed)</span>
<p>Lindsey's Bakery</p>

<span className="be-bold-plz">Authorized Signer Name</span>
<p>Lindsey Johnson</p>
<span className="be-bold-plz">Title (Manager, Owner, etc.)</span>
<p>President / CEO / Head Baker</p>
<span className="be-bold-plz">Electronic Signature</span>
<p className="signature">Lindsey Johnson</p>

</p>
                            </div>
                            
                        </Modal.Content>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
  });
  
export default connect(mapStateToProps)(ViewContract);