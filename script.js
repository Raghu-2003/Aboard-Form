
document.getElementById('apply-form').addEventListener('submit', function(event) {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let phone = document.querySelector('input[name="phone"]').value;

    if (!name || !email || !phone) {
        alert('Please fill in all required fields.');
        event.preventDefault(); 
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    } else {
       
        alert('Form submitted!');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');


!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
fbq('track', 'PageView');
