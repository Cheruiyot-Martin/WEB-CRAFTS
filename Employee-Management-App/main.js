document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
        
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                department: document.getElementById('department').value,
                position: document.getElementById('position').value
            };
            
            
            alert('Contact added successfully!\n\n' + 
                  'Name: ' + formData.fullName + '\n' +
                  'Email: ' + formData.email + '\n' +
                  'Phone: ' + formData.phone + '\n' +
                  'Department: ' + formData.department + '\n' +
                  'Position: ' + formData.position);
            
            
            contactForm.reset();
        });
    }
});


function viewDetails(name) {
    alert('Employee Details:\n\n' +
          'Name: ' + name + '\n' +
          'Status: Active\n' +
          'Join Date: 2024-01-15\n' +
          'Location: Main Office');
}


function editContact(name) {
    const newName = prompt('Edit Contact: ' + name + '\n\nEnter new name:', name);
    if (newName && newName !== name) {
        alert('Contact updated successfully!\nNew name: ' + newName);
    }
}


function deleteContact(name) {
    const confirmDelete = confirm('Are you sure you want to delete ' + name + '?');
    if (confirmDelete) {
        alert(name + ' has been deleted successfully.');
    
    }
}