$(document).ready(function () {
    $('#ctable').DataTable({
        ajax:{
            url:"/api/customer",
            // url:"http://localhost:5000/api/v1/customers",
            dataSrc: ""
        },
        dom:'Bfrtip',
        buttons:[
            'pdf',
            'excel',
            // {
            //     text:'Add customer',
            //     className: 'btn btn-primary',
            //     action: function(e, dt, node, config){
            //         $("#cform").trigger("reset");
            //         $('#customerModal').modal('show');
            //     }
            // }
        ],
        columns:[
            {data: 'customer_id'},
            {data: 'fname'},
            {data: 'lname'},
            {data: 'addressline'},
            {data: 'town'},
            {data: 'zipcode'},
            {data: 'phone'},
            // {data: null,
            //     render: function (data,type,JsonResultRow,row) {
            //         return '<img src="/storage/' + JsonResultRow.img_path + '" width="80px" height="80px">';
            //     },
            // },

            {data: null,
                render:function(data, type, row){
                    // console.log(data.img_path)
                    // return `<img src="/storage/${data.img_path}" width="100px" height="100px">`;
                    return `<imtg src= ${data.imagePath} "height="100px" width="100px">`;
                }
            },
            {data: null,
                render: function (data, type, row) {
                    return "<a href='#' class='editBtn id='editbtn' data-id=" +
                        data.customer_id + "><i class='fa-solid fa-pen-to-square' aria-hidden='true' style='font-size:40px' ></i></a>";
                },
            },
            {data: null,
                render: function (data, type, row) {
                    return "<a href='#' class='deletebtn' data-id=" + data.customer_id + "><i class='fa-sharp fa-solid fa-trash' style='font-size:40px; color:red'></a></i>";
                },
            },
        ]
        
    })//end datatables

    // $("#customerSubmit").on("click", function (e) {
    //     e.preventDefault();
    //     // var data = $("#iform").serialize();
    //     var data = $('#iform')[0];
    //     console.log(data);
    //     let formData = new FormData(data);

    //     console.log(formData);
    //     for (var pair of formData.entries()) {
    //         console.log(pair[0] + ', ' + pair[1]);
    //     }

    //     $.ajax({
    //         type: "post",
    //         url: "/api/customer",
    //         data: formData,
    //         contentType: false,
    //         processData: false,
    //         headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    //         dataType:"json", 

    //         success:function(data){
    //                console.log(data);
    //                $("#customerModal").modal("hide");

    //                var $ctable = $('#ctable').DataTable();
    //                $ctable.row.add(data.customer).draw(false); 
    //         },

    //         error:function (error){
    //             console.log(error);
    //         }
    //     })
    // });

    // $("#ctable tbody").on("click", "a.editBtn", function (e) {
    //     e.preventDefault();
    //     var id = $(this).data('id');
    //     $('#editcustomerModal').modal('show');


    //     $.ajax({
    //         type: "GET",
    //         url: "api/customer/" + id + "/edit",
    //         headers: {
    //             "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    //         },
    //         dataType: "json",
    //         success: function(data){
    //                console.log(data);
    //                $("#customer_id").val(data.customer_id);
    //                $("#cfname").val(data.fname);
    //                $("#clname").val(data.lname);
    //                $("#caddressline").val(data.addressline);
    //                $("#ctown").val(data.town);
    //                $("#czipcode").val(data.zipcode);
    //                $("#cphone").val(data.phone);
    //                $("#cimagePath").val(data.imagePath);
    //             },
    //             error: function(){
    //                 console.log('AJAX load did not work');
    //                 alert("error");
    //             }
    //         });
    //     });//end edit fetch
        
        // $("#updatebtncustomer").on('click', function(e) {
        //     e.preventDefault();
        //     var id = $('#eecustomer_id').val();
        //     //var data = $("#updatecustomerform").serialize();
        //     console.log(data);

        //     var table =$('#ctable').DataTable();
        //     var cRow = $("tr td:contains(" + id + ")").closest('tr');
        //     var data =$("#ayform").serialize();

        //     $.ajax({
        //         type: "PUT",
        //         url: `api/customer/${id}`,
        //         data: data,
        //         headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        //         dataType: "json",
        //         success: function(data) {
        //             console.log(data);
        //             // $('#editcustomerModal').each(function(){
        //             //         $(this).modal('hide'); });

        //             $('#editcustomerModal').modal("hide");
        //             table.row(cRow).data(data).invalidate().draw(false);
        //         },
        //         error: function(error) {
        //             console.log(error);
        //         }
        //     });
        // });//end update

        // $("#ctable tbody").on("click", "a.deletebtn", function (e) {
        //     var table = $('#ctable').DataTable();
        //     var id = $(this).data('id');
        //     var $row = $(this).closest('tr');
        //     console.log(id);
    
        //     e.preventDefault();
        //     bootbox.confirm({
        //         message: "Do you want to delete this customer",
        //         buttons: {
        //             confirm: {
        //                 label: "Yes",
        //                 className: "btn-success",
        //             },
        //             cancel: {
        //                 label: "No",
        //                 className: "btn-danger",
        //             },
        //         },
        //         callback: function (result) {
        //             if (result)
        //                 $.ajax({
        //                     type: "DELETE",
        //                     // url: "/api/customer/" + id,
        //                     url:`http://localhost:5000/api/v1/customers/${id}`,
        //                     headers: {
        //                         "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
        //                             "content"
        //                         ),
        //                     },
        //                     dataType: "json",
        //                     success: function (data) {
        //                         console.log(data);
        //                         // bootbox.alert('success');
        //                         // $tr.find("td").fadeOut(2000, function () {
        //                         //     $tr.remove();
        //                         $row.fadeOut(4000, function(){
        //                             table.row($row).remove().draw(false)
        //                         });
        //                         bootbox.alert(data.success)
                               
        //                     },
        //                     error: function (error) {
        //                         console.log(error);
        //                     },
        //                 });
        //         },
        //     });
        // });//DELETE
}); //Document.ready end