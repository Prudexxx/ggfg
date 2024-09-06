import './video.css'; 
import video from './prob1.mp4'




const Video = () => {
    return (
    <div className="video" >    
     
            <video className="video1" autoPlay muted loop>
                <source src={video} />
            </video>
     
 
    </div>
    )
}

export default Video;