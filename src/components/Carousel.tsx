import './Carousel.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faTimes, faCog } from '@fortawesome/free-solid-svg-icons';

import CarouselSettings from './CarouselSettings';

import car1 from '../assets/images/munich.jpg';
import car2 from '../assets/images/amusement.jpg';
import car3 from '../assets/images/oktoberfest.jpg';
import forrest from '../assets/images/forrest.jpg';
import desert from '../assets/images/desert.jpg';
import ocean from '../assets/images/ocean.jpg';
import newyork from '../assets/images/newyork.jpg';
import city from '../assets/images/city.jpg';

const CarouselUI = () => {

    //force update
    const [FU, setFU] = useState(true)
    //modal window
    const [modalShow, setModalShow] = useState(false)

    //TODO vylepsit management obrazku / import
    const images = [
        {name: "car1", value: car1},
        {name: "car2", value: car2},
        {name: "car3", value: car3},
        {name: "forrest", value: forrest},
        {name: "desert", value: desert},
        {name: "ocean", value: ocean},
        {name: "newyork", value: newyork},
        {name: "city", value: city},
    ]
    const carOptionsSize = [
        {name: "S", value: 350},
        {name: "M", value: 540},
        {name: "L", value: 800},//FULL
    ]
    const carOptionsAnimation = [
        {name: "slide", value: false},
        {name: "fade", value: true},
    ]
    const carOptionsSpeed = [
        {name: "1 sec", value: 1000},
        {name: "Auto 2 sec", value: 2000},
        {name: "5 sec", value: 5000},
    ]
    const carBtnOptions = [
        {name: "New window", value: "_blank"},
        {name: "Same window", value: ""},
    ]
    const [carOptions] = useState({size: 540, animation: false, speed: 2000,})

    /*const [carTilesDisplay, setCarTilesDisplay] = useState([
        {
        enabledTile: true,
        background: "forrest",
        subheader: "subheader",
        heading: "heading",
        btnText: "btnText",
        btnLink: "https://www.seznam.cz/",
        btnOptions: "_blank",
        },
    ])*/

    const [carTiles, setCarTiles] = useState([
        {
        enabledTile: true,
        background: "desert",
        subheader: "subheader1",
        heading: "slide1",
        btnText: "LEARN MORE",
        btnLink: "https://www.seznam.cz/",
        btnOptions: "_blank",
        },
        {
        enabledTile: true,
        background: "newyork",
        subheader: "subheader2",
        heading: "slide2",
        btnText: "LEARN MORE",
        btnLink: "https://www.seznam.cz/",
        btnOptions: "_blank",
        },
        {
        enabledTile: true,
        background: "ocean",
        subheader: "subheader3",
        heading: "slide3",
        btnText: "LEARN MORE",
        btnLink: "https://www.seznam.cz/",
        btnOptions: "_blank",
        },
        {
        enabledTile: true,
        background: "city",
        subheader: "subheader4",
        heading: "slide4",
        btnText: "LEARN MORE",
        btnLink: "https://www.seznam.cz/",
        btnOptions: "_blank",
        },
    ])

    const handleModalShow = () => setModalShow(!modalShow)

    //carTiles display/set
    const handleCarTileBtnOptionsTitle = (id: number) => {let candidate: any = carBtnOptions.find((item: any) => (item.value === carTiles[id].btnOptions)); return candidate.name}

    const handleCarTileEnable = (id: number) => {carTiles[id].enabledTile = !carTiles[id].enabledTile; handleRefresh()}
    const handleCarTileSubheader = (id: number, value: string) => {carTiles[id].subheader = value; handleRefresh()}
    const handleCarTileHeading = (id: number, value: string) => {carTiles[id].heading = value; handleRefresh()}
    const handleCarTileBtnText = (id: number, value: string) => {carTiles[id].btnText = value; handleRefresh()}
    const handleCarTileBtnLink = (id: number, value: string) => {carTiles[id].btnLink = value; handleRefresh()}
    const handleCarTileBtnOptions = (id: number, value: string) => {carTiles[id].btnOptions = value; handleRefresh()}

    //carOptions display/set
    const handleCarOptionsAnimationTitle = () => {let candidate: any = carOptionsAnimation.find((item: any) => (item.value === carOptions.animation)); return candidate.name}
    const handleCarOptionsSpeedTitle = () => {let candidate: any = carOptionsSpeed.find((item: any) => (item.value === carOptions.speed)); return candidate.name}

    const handleCarOptionsSize = (value: number) => {carOptions.size = value; handleRefresh()}
    const handleCarOptionsAnimation = (value: boolean) => {carOptions.animation = value; handleRefresh()}
    const handleCarOptionsSpeed = (value: number) => {carOptions.speed = value; handleRefresh()}

    //match image with json string //carTiles carTilesDisplay
    const handleCarImageMatch = (id: number) => {let candidate: any = images.find((item: any) => (item.name === carTiles[id].background)); return candidate.value}

    //add new tile
    const handleCarTileAdd = () => {
        setCarTiles([
        ...carTiles,
        {
            enabledTile: true,
            background: "forrest",
            subheader: "subheader",
            heading: "heading",
            btnText: "btnText",
            btnLink: "https://www.seznam.cz/",
            btnOptions: "_blank",
        }
        ])
    }
    //duplicate selected tile
    const handleCarTileDuplicate = (id: number) => {
        setCarTiles([
        ...carTiles,
        {
            enabledTile: carTiles[id].enabledTile,
            background: carTiles[id].background,
            subheader: carTiles[id].subheader,
            heading: carTiles[id].heading,
            btnText: carTiles[id].btnText,
            btnLink: carTiles[id].btnLink,
            btnOptions: carTiles[id].btnOptions,
        }
        ])
    }
    //remove selected tile
    const handleCarTileRemove = (id: number) => {
        //setCarTiles(carTiles.filter((item) => (item.id !== id))) //toto nefungovalo dobre
        carTiles.splice(id, 1)
        handleRefresh()
    }
 
    //save carTiles to carTilesDisplay
    //const handleCarTilesSave = () => {setCarTilesDisplay([...carTiles])}
    //load settings from JSON
    //const handleCarTilesJsonLoad = () => {setCarTiles([...carouselTiles]); handleCarTilesSave()}
    //save settings to JSON //TODO save to JSON
    const handleCarTilesJsonSave = () => {console.log(JSON.stringify({carTiles}))}

    //save settings to json //TODO carTiles/carTilesActive
    const saveSettings = () => {
        handleCarTilesJsonSave()
        console.log("save tiles to json")
        handleModalShow()
    }

    //more options in tilesSettings //TODO tady zatim nic neni
    const moreOptions = () => (console.log("more options"))

    //refresh / force update
    const handleRefresh = () => {setFU(!FU)}
    //on load page //json to carTiles //TODO udelat aby se to stalo jen jednou stejne jako componentDidMount
    //useEffect(() => {handleCarTilesJsonLoad()}, [])


    return (
        <div className="Carousel">
            
            <div className="Carousel">
                <Carousel className="Carousel-inner"
                    interval={carOptions.speed}
                    fade={carOptions.animation}
                    nextIcon={<FontAwesomeIcon icon={faChevronRight} className="Carousel-chevron"/>}
                    prevIcon={<FontAwesomeIcon icon={faChevronLeft} className="Carousel-chevron"/>}>
                {carTiles.map((tile: any, index: number) => (
                tile.enabledTile &&
                    <Carousel.Item key={tile.id}>
                        <img src={handleCarImageMatch(index)}
                            alt={carTiles[index].background}
                            height={carOptions.size}
                            className="Carousel-img">
                        </img>
                        <Carousel.Caption className="Carousel-heading">
                            <div className="Carousel-text">
                                {tile.heading}
                            </div>
                            <div>
                                <Button variant="outline-light"
                                href={tile.btnLink} 
                                target={tile.btnOptions}
                                className="Carousel-button custom-button">
                                    {tile.btnText}
                                </Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>

            <Button onClick={handleModalShow}>
                Carousel Settings
            </Button>

            <Modal
                show={modalShow}
                onHide={handleModalShow}
                size="lg">
                <Modal.Header>
                    <Modal.Title>Header Settings</Modal.Title>
                    <button onClick={handleModalShow} className="Modal-button-close">
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <CarouselSettings
                        carOptionsSize={carOptionsSize}
                        carOptionsAnimation={carOptionsAnimation}
                        carOptionsSpeed={carOptionsSpeed}
                        carOptions={carOptions}
                        carTiles={carTiles}
                        carBtnOptions={carBtnOptions}
                        handleCarTileAdd={handleCarTileAdd}
                        handleCarTileDuplicate={handleCarTileDuplicate}
                        handleCarTileRemove={handleCarTileRemove}
                        //saveSettings={saveSettings}
                        moreOptions={moreOptions}
                        handleCarTileBtnOptionsTitle={handleCarTileBtnOptionsTitle}
                        handleCarTileSubheader={handleCarTileSubheader}
                        handleCarTileHeading={handleCarTileHeading}
                        handleCarTileBtnText={handleCarTileBtnText}
                        handleCarTileBtnLink={handleCarTileBtnLink}
                        handleCarTileBtnOptions={handleCarTileBtnOptions}
                        handleCarTileEnable={handleCarTileEnable}
                        //handleCarOptionsSizeTitle={handleCarOptionsSizeTitle}
                        handleCarOptionsAnimationTitle={handleCarOptionsAnimationTitle}
                        handleCarOptionsSpeedTitle={handleCarOptionsSpeedTitle}
                        handleCarOptionsSize={handleCarOptionsSize}
                        handleCarOptionsAnimation={handleCarOptionsAnimation}
                        handleCarOptionsSpeed={handleCarOptionsSpeed}>
                    </CarouselSettings>
                </Modal.Body>
                <Modal.Footer className="Modal-footer">
                    <Button variant="outline-light"
                    onClick={saveSettings}
                    style={{backgroundColor: "darkcyan", color: "white"}}
                    className="custom-button">
                        SAVE
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default CarouselUI;