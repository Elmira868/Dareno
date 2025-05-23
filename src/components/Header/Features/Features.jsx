import './Features.css';

export default function Features({title , desc, className=''}){
    return(
        <>
        <div className={`features-box ${className}`}>
            <h1 className='features-title'>{title}</h1>
            <p className='features-desc'>{desc}</p>
        </div>
        </>
    )
}