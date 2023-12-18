"use client"
import { setCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

const CookieConsent = () => {
const [showConsent, setShowConsent] = useState(false);

useEffect(() => {
// If no consent cookie is present, show the consent popup
if (!hasCookie('consent')) {
setShowConsent(true);
}
}, []);

const acceptConsent = () => {
// When user accepts the consent, hide the popup and set a consent cookie
setShowConsent(false);
setCookie('consent', 'true');
};

if (!showConsent) {
return null;
}

return (
<div aria-label="I understand">
<p>We use cookies to improve your experience. By your continued use of this site you accept such use.</p>
<button onClick={acceptConsent}>I understand</button>
</div>
);
};