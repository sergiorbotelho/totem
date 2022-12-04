import './input.css'

export default function Input({ type, onChange, placeholder }){
    return(
        <div>
            <input
                type={ type }
                onChange={ onChange }
                className='input'
                placeholder={ placeholder }
                autoFocus={true}
            />
        </div>
    )
}