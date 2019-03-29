var CommonList = {

    swal_alert:function(message, type){
        const swalAlert = Swal.mixin({
            heightAuto:'auto',
            type: type,
            titleText: 'Successfully',
            text: 'You log in no success',
            animation: false,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#28a745'
        });
         return swalAlert;
    },
    swal_confirm:function(message, type){
        const swalAlert = Swal.mixin({
            heightAuto:'auto',
            type: type,
            titleText: 'Successfully',
            text: 'You log in no success',
            animation: false,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#28a745',
            showCancelButton: true,
            cancelButtonColor: '#d33'
        });
        return swalAlert;
    }
}