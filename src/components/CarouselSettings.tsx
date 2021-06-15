import './CarouselSettings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisH, faClone, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import RadioButton from './UI/RadioButton';


const CarouselSettings = (props: any) => {
    const { 
        carOptionsSize,
        carOptionsAnimation,
        carOptionsSpeed,
        carOptions,
        carTiles,
        carBtnOptions,
        handleCarTileAdd,
        handleCarTileDuplicate,
        handleCarTileRemove,
        //saveSettings,
        moreOptions,
        handleCarTileBtnOptionsTitle,
        handleCarTileSubheader,
        handleCarTileHeading,
        handleCarTileBtnText,
        handleCarTileBtnLink,
        handleCarTileBtnOptions,
        handleCarTileEnable,
        //handleCarOptionsSizeTitle,
        handleCarOptionsAnimationTitle,
        handleCarOptionsSpeedTitle,
        handleCarOptionsSize,
        handleCarOptionsAnimation,
        handleCarOptionsSpeed
    } = props;

    return (
        <div className="CarouselSettings">

            <div className="CarouselSettings-tab1">
                <div> Size </div>
                <div className="colSpan2"> Animation </div>
            </div>
            <div className="CarouselSettings-tab1">
                <div>
                    <ButtonGroup toggle 
                        className="custom-button-group">
                        {carOptionsSize.map((item: any) => (
                            <Button variant="outline-light"
                                onClick={() => (handleCarOptionsSize(item.value))}
                                style={(item.value === carOptions.size) ? {backgroundColor: "darkcyan", color: "white"} : {}}>
                                    {item.name}
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
                <div>
                    <DropdownButton variant="outline-light"
                        title={handleCarOptionsAnimationTitle()} 
                        className="custom-button-dropdown">
                        {carOptionsAnimation.map((item: any) => (
                            <Dropdown.Item onClick={() => (handleCarOptionsAnimation(item.value))}>
                                {item.name}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <DropdownButton variant="outline-light" 
                        title={handleCarOptionsSpeedTitle()}
                        className="custom-button-dropdown">
                        {carOptionsSpeed.map((item: any) => (
                            <Dropdown.Item onClick={() => (handleCarOptionsSpeed(item.value))}>
                                {item.name}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </div>
            </div>


            <div className="CarouselSettings-tab-header">
                <div>Tiles</div>
                <div>
                    <div onClick={handleCarTileAdd} className="CarouselSettings-button-addTile">
                        <FontAwesomeIcon icon={faPlusCircle} color="darkcyan"/> Add Tile
                    </div>
                </div>
            </div>


            <div className="CarouselSettings-tab2 CarouselSettings-tab2-header">
                <div></div>
                <div className="colSpan2">Subheader</div>
                <div className="colSpan3">Heading</div>
                <div></div>
                <div>Background</div>
                <div></div>
                <div></div>
            </div>
            
            {carTiles && carTiles.map((item: any, index: number) => (
                <>
                    <div className="CarouselSettings-tab2">
                        <div><FontAwesomeIcon icon={faBars} color="lightgrey"/></div>
                        <div className="colSpan2">
                            <input type="text"
                            onChange={(e) => (handleCarTileSubheader(index, e.target.value))}
                            placeholder={item.subheader}
                            className="custom-input"/>
                        </div>
                        <div className="colSpan3">
                            <input type="text"
                            onChange={(e) => (handleCarTileHeading(index, e.target.value))}
                            placeholder={item.heading}
                            className="custom-input"/>
                        </div>
                        <div>
                            <RadioButton
                            onClick={() => (handleCarTileEnable(index))}
                            color="darkcyan"
                            switchValue={item.enabledTile}>
                            </RadioButton>
                        </div>
                        <div>imgs</div>
                        <div>
                            <FontAwesomeIcon icon={faTrash} 
                            onClick={() => (handleCarTileRemove(index))}
                            className="CarouselSettings-icon"/>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-light" 
                                    className="custom-button-ellipsis">
                                    <FontAwesomeIcon icon={faEllipsisH}/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="Tile-dropdown-menu">
                                    <Dropdown.Item onClick={() => (handleCarTileDuplicate(index))}>
                                        <FontAwesomeIcon icon={faClone} color="darkcyan"/> Duplicate
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => (moreOptions)}>
                                        <FontAwesomeIcon icon={faPlusCircle} color="darkcyan"/> More Options
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => (handleCarTileRemove(index))}>
                                        <FontAwesomeIcon icon={faTrash} color="darkcyan"/> Remove
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="CarouselSettings-tab2">
                        <div></div>
                        <div className="colSpan2">
                            <input type="text"
                            onChange={(e) => (handleCarTileBtnText(index, e.target.value))}
                            placeholder={item.btnText}
                            className="custom-input"/>
                        </div>
                        <div className="colSpan3">
                            <input type="text"
                            onChange={(e) => (handleCarTileBtnLink(index, e.target.value))}
                            placeholder={item.btnLink}
                            className="custom-input"/>
                        </div>
                        <div className="colSpan2">
                            <DropdownButton variant="outline-light"
                                title={handleCarTileBtnOptionsTitle(index)} 
                                className="custom-button-dropdown">
                                {carBtnOptions.map((item: any) => (
                                <Dropdown.Item onClick={() => (handleCarTileBtnOptions(index, item.value))}>
                                    {item.name}
                                </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                        <div></div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default CarouselSettings;