// Code Converter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const convertBtn = document.querySelector('button.bg-primary');
    const inputCode = document.querySelectorAll('textarea')[0];
    const outputCode = document.querySelectorAll('textarea')[1];
    const fromLanguage = document.querySelectorAll('select')[0];
    const toLanguage = document.querySelectorAll('select')[1];

    // Convert button functionality
    if (convertBtn) {
        convertBtn.addEventListener('click', function() {
            if (inputCode.value.trim() === '') {
                outputCode.value = '// Please enter some code to convert';
                return;
            }

            // Simulate conversion (in a real app, this would call an API)
            outputCode.value = `// Converted from ${fromLanguage.value} to ${toLanguage.value}\n` + 
                              `// Conversion would happen here\n` +
                              inputCode.value;
            
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Converting';
            this.disabled = true;

            // Simulate API delay
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 1000);
        });
    }
});
