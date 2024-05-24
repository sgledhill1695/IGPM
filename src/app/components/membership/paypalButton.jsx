import React, { useEffect } from 'react';

const PayPalButton = () => {
    useEffect(() => {
        // Load the PayPal SDK script
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=sb&vault=true&intent=subscription';
        script.setAttribute('data-sdk-integration-source', 'button-factory');
        script.async = true;
        script.onload = () => {
            paypal.Buttons({
                style: {
                    shape: 'rect',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'subscribe'
                },
                createSubscription: function (data, actions) {
                    return actions.subscription.create({
                        plan_id: 'P-9AC4713973647582WMA7HEIQ'
                    });
                },
                onApprove: function (data, actions) {
                    alert(data.subscriptionID); // You can add optional success message for the subscriber here
                }
            }).render('#paypal-button-container');
        };
        document.body.appendChild(script);
    }, []);

    return <div id="paypal-button-container"></div>;
};

export default PayPalButton;