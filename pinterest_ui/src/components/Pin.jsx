import React from 'react';
import '../styles/pin.styles.css';

const Pin = () => {
    return (
        <div>
            <input type="file" name='picture' id='picture' value=""/>
            <div className="card">
                <div className="pin_title"></div>
                <div className="pin_modal">
                    <div className="modal_head">
                        <div className="save_card">Save</div>
                    </div>
                    <div className="modal_foot">
                        <div className="destination">
                            <div className="pin_mock_icon_container">
                                <img src="" alt="" className="pin_mock_icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin_image">
                    <img src="" alt="pin_image"/>
                </div>

            </div>
        </div>
    )
}

export default Pin
