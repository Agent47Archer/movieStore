$('#file_upld').on('change', (e) => {
    if ($('#file_upld')[0].files.length > 0) {
        if ($('#file_upld')[0].files[0].size > 1000) {
            $('#file_upld').val('');
            alert('File Size cannot be more than 1 MB');
        }
    }
});