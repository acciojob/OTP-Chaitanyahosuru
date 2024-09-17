//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {
    const codeId = `code-${index + 1}`;
    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && code.value === '' && index !== 0) {
            document.getElementById(`code-${index}`).focus();
        }
    });
