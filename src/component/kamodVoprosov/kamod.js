import React, { useState } from 'react';
import './kkamod.css'; // Импортируем стили

const Drawer = ({ title, content,df, isOpen, toggleDrawer }) => {
    return (
        <div className="vopros">
                 <div className="drawer"> 
            <div className="drawer-header" onClick={toggleDrawer}>
                {title}
            </div>
            {isOpen && <div className="drawer-content">{content} <div>{df}</div></div> }
           
        </div>
        
        
        </div>
    );
};

const KamodVoprosov = ({ drawers }) => {
    const [openDrawers, setOpenDrawers] = useState(Array(drawers.length).fill(false));

    const toggleDrawer = (index) => {
        const updatedDrawers = openDrawers.map((isOpen, i) =>
            i === index ? !isOpen : isOpen
        );
        setOpenDrawers(updatedDrawers);
    };

    return (
        <div className="cabinet">
            {drawers.map((drawer, index) => (
                <Drawer
                    key={index}
                    title={drawer.title}
                    content={drawer.content}
                    df={drawer.df}
                    isOpen={openDrawers[index]}
                    toggleDrawer={() => toggleDrawer(index)}
                />
            ))}
        </div>
    );
};



export default KamodVoprosov;
