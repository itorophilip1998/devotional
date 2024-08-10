import React from "react";
import { useNavigate } from "react-router-dom";

function Terms() {
  const navigate=useNavigate()
  return (
    <div className="container pb-5 pt-2 mb-4">
      <button className="btn shadow my-4" onClick={()=>navigate(-1)}>Back</button>
      <h2>Terms and Conditions for Fulga Devotionals Subscription Service</h2>

      <p>
        These terms and conditions ("Terms") govern your use of the Fulga
        Devotionals subscription service ("Service"). By accessing or using the
        Service, you agree to be bound by these Terms. If you do not agree to
        these Terms, please do not use the Service.
      </p>

      <h3>1. Subscription Service</h3>

      <ol>
        <li>
          <h5>Subscription Plans</h5>
          <p>
            Fulga Devotionals offers a subscription-based service where users
            can access premium devotionals content.
          </p>
        </li>

        <li>
          <h5>Payment</h5>
          <p>
            By subscribing to Fulga Devotionals, you agree to pay the
            subscription fee every 6 months as specified in the subscription
            plan.
          </p>
        </li>

        <li>
          <h5>Payment Authorization</h5>
          <p>
            By providing payment details, you authorize Fulga Devotionals to
            charge your chosen payment method automatically for the subscription
            fee every 6 months until you cancel your subscription.
          </p>
        </li>
      </ol>

      <h3>2. Access and Use</h3>

      <ol>
        <li>
          <h5>Account Registration</h5>
          <p>
            To access the Service, you must create an account on the Fulga
            Devotionals platform.
          </p>
        </li>

        <li>
          <h5>User Responsibilities</h5>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
        </li>

        <li>
          <h5>Content Usage</h5>
          <p>
            You agree to use the Service only for personal, non-commercial
            purposes. You may not reproduce, distribute, or modify the content
            provided by Fulga Devotionals without prior authorization.
          </p>
        </li>
      </ol>

      <h3>3. Subscription Renewal and Cancellation</h3>

      <ol>
        <li>
          <h5>Renewal</h5>
          <p>
            Your subscription will automatically renew every 6 months unless you
            cancel it before the renewal date.
          </p>
        </li>

        <li>
          <h5>Cancellation</h5>
          <p>
            You may cancel your subscription at any time. Cancellation requests
            must be submitted before the next billing cycle to avoid being
            charged for the subsequent period.
          </p>
        </li>
      </ol>

      <h3>4. Privacy</h3>

      <ol>
        <li>
          <h5>Data Collection</h5>
          <p>
            Fulga Devotionals collects and processes personal data in accordance
            with its Privacy Policy. By using the Service, you consent to the
            collection, use, and sharing of your information as described in the
            Privacy Policy.
          </p>
        </li>
      </ol>

      <h3>5. Modifications to the Terms</h3>

      <ol>
        <li>
          <h5>Updates</h5>
          <p>
            Fulga Devotionals reserves the right to update or modify these Terms
            at any time. Updated Terms will be posted on the Fulga Devotionals
            website, and it is your responsibility to review them periodically.
          </p>
        </li>

        <li>
          <h5>Continued Use</h5>
          <p>
            Your continued use of the Service after the posting of updated Terms
            constitutes acceptance of the changes.
          </p>
        </li>
      </ol>

      <h3>6. Contact Us</h3>

      <p>
        If you have any questions or concerns about these Terms or the Service,
        please contact us at [contact email or address].
      </p>
    </div>
  );
}

export default Terms;
