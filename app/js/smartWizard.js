$(document).ready(function(){

    // Toolbar extra buttons
    var btnFinish = $('<button></button>').text('Завершить')
        .addClass('btn btn-info')
        .on('click', function(){
            if( !$(this).hasClass('disabled')){
                var elmForm = $("#myForm");
                if(elmForm){
                    elmForm.validator('validate');
                    var elmErr = elmForm.find('.has-error');
                    if(elmErr && elmErr.length > 0){
                        alert('Опаньки! Что-то заполнено неверно.');
                        return false;
                    }else{
                        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                        elmForm.submit();
                        return false;
                    }
                }
            }
        });
    var btnCancel = $('<button></button>').text('Отменить')
        .addClass('btn btn-danger')
        .on('click', function(){
            $('#smartwizard').smartWizard("reset");
            $('#myForm').find("input, textarea").val("");
        });



    // Smart Wizard
    $('#smartwizard').smartWizard({
        selected: 0,
        theme: 'dots',
        transitionEffect:'slide',
        toolbarSettings: {toolbarPosition: 'bottom',
            toolbarExtraButtons: [btnFinish, btnCancel]
        },
        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }
    });

    $("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        var elmForm = $("#form-step-" + stepNumber);
        // stepDirection === 'forward' :- this condition allows to do the form validation
        // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
        if(stepDirection === 'forward' && elmForm){
            elmForm.validator('validate');
            var elmErr = elmForm.children('.has-error');
            if(elmErr && elmErr.length > 0){
                // Form validation failed
                return false;
            }
        }
        return true;
    });

    $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if(stepNumber == 7){
            $('.btn-finish').removeClass('disabled');
        }else{
            $('.btn-finish').addClass('disabled');
        }
    });


    // second

    // Toolbar extra buttons
    var btnFinish = $('<button></button>').text('Завершить')
        .addClass('btn btn-info')
        .on('click', function(){
            if( !$(this).hasClass('disabled')){
                var elmForm = $("#myForm2");
                if(elmForm){
                    elmForm.validator('validate');
                    var elmErr = elmForm.find('.has-error');
                    if(elmErr && elmErr.length > 0){
                        alert('Опаньки! Что-то заполнено неверно.');
                        return false;
                    }else{
                        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                        elmForm.submit();
                        return false;
                    }
                }
            }
        });
    var btnCancel = $('<button></button>').text('Отменить')
        .addClass('btn btn-danger')
        .on('click', function(){
            $('#smartwizard2').smartWizard("reset");
            $('#myForm2').find("input, textarea").val("");
        });



    // Smart Wizard
    $('#smartwizard2').smartWizard({
        selected: 0,
        theme: 'dots',
        transitionEffect:'slide',
        toolbarSettings: {toolbarPosition: 'bottom',
            toolbarExtraButtons: [btnFinish, btnCancel]
        },
        anchorSettings: {
            markDoneStep: true, // add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        }
    });

    $("#smartwizard2").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
        var elmForm = $("#form-step-" + stepNumber);
        // stepDirection === 'forward' :- this condition allows to do the form validation
        // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
        if(stepDirection === 'forward' && elmForm){
            elmForm.validator('validate');
            var elmErr = elmForm.children('.has-error');
            if(elmErr && elmErr.length > 0){
                // Form validation failed
                return false;
            }
        }
        return true;
    });

    $("#smartwizard2").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
        // Enable finish button only on last step
        if(stepNumber == 7){
            $('.btn-finish').removeClass('disabled');
        }else{
            $('.btn-finish').addClass('disabled');
        }
    });
});