import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {editSongCallback, hideEditSongModalCallback } = this.props;
        
        return (
            //<!-- MODAL (i.e. DIALOG) FOR EDITING SONG DATA -->
            <div id="edit-song-modal" class="modal" data-animation="slideInOutLeft">
                <div id='edit-song-root' class="modal-root">
                    
                    <div id="edit-song-modal-header" class="modal-north">Edit Song</div>
                    <div id="edit-song-modal-content" class="modal-center">
                        <div id="title-text" class="modal-prompt">
                            Title:
                        </div>
                        
                        <input id="title-textfield" class='modal-textfield' type="text" />
                        
                        <div id="artist-text" class="modal-prompt">
                            Artist:
                        </div>
                        
                        <input id="artist-textfield" class='modal-textfield' type="text" />
                        
                        <div id="youtubeid-text" class="modal-prompt">
                            YouTube ID:
                        </div><input id="youTubeId-textfield" class='modal-textfield' type="text" />
                    </div>
                    
                    <div class="modal-south">
                        <input type="button" id="edit-song-confirm-button" class="modal-button" value='Confirm' onClick={editSongCallback}/>
                        <input type="button" id="edit-song-cancel-button" class="modal-button" value='Cancel'onClick={hideEditSongModalCallback} />
                    </div>
                    
                </div>
            </div>
        );
    }
}          
             
