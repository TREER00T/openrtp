function getId(regex, viewId) {
    return viewId.replace(regex, '');
}

let arrBaseUrl = window.location.href.split('/').filter((data) => {
        return data;
    }),
    url = arrBaseUrl[0] + '//' + arrBaseUrl[1];

function baseIconUrl(cb) {
    $.ajax({
        url: url + '/iconUrl',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            cb(data.url);
        }
    });
}

function getImageName(url) {
    let arr = url.split('/');
    return arr[arr.length - 1];
}

function viewVisibility(tId, type) {
    let targetId = document.getElementById(tId);

    if (window.getComputedStyle(targetId).display === type)
        return targetId.style.display = 'none';

    targetId.style.display = type;
}

function arrowImageStatus(tId) {
    let targetId = document.getElementById(tId);
    let isDownImage = getImageName(targetId.src) === 'arrow-down.svg';

    if (isDownImage) {
        return baseIconUrl(url => {
            targetId.src = url + 'arrow-right.svg';
        });
    }
    baseIconUrl(url => {
        targetId.src = url + 'arrow-down.svg';
    });
}

function arrowTagVisibility(view) {
    let tId = `desc-for-tag-${getId('arrow-tag-', view.id)}`;
    arrowImageStatus(view.id);
    viewVisibility(tId, 'block');
}

function tagItemVerticalBackgroundVisibility(view) {
    arrowImageStatus(`arrow-vertical-item-tag-${getId('div-vertical-item-tag-', view.id)}`)
    viewVisibility(`rectangle-vertical-box-border-${getId('div-vertical-item-tag-', view.id)}`, 'table');
}

function modelItemVerticalBackgroundVisibility(view) {
    arrowImageStatus(`arrow-vertical-item-model-${getId('div-vertical-item-model-', view.id)}`);
    viewVisibility(`table-model-${getId('div-vertical-item-model-', view.id)}`, 'table');
}


function dialog(id) {
    let viewClickedId = id,
        openDialogView = document.getElementById(viewClickedId),
        closeDialogView = document.getElementById(`closeAuthDialog-${getId('openAuthDialog-', viewClickedId)}`),
        dialog = document.getElementById(`authDialog-${getId('openAuthDialog-', viewClickedId)}`),
        isClickedCommonAuthDialog = viewClickedId === 'openCommonAuthDialog';


    if (isClickedCommonAuthDialog) {
        openDialogView = document.getElementById('openCommonAuthDialog');
        closeDialogView = document.getElementById('closeCommonAuthDialog');
        dialog = document.getElementById('commonAuthDialog');
    }

    let openDialog = () => {
            document.body.style.overflow = 'hidden';
            dialog.showModal();
        },
        closeDialog = () => {
            document.body.style.overflow = 'auto';
            dialog.close();
        };

    openDialogView.addEventListener('click', openDialog);
    closeDialogView.addEventListener('click', closeDialog);
}