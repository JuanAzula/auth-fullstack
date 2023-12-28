export default function Togglable ({ children }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      fontSize: '20px',
      width: '100%'
    }}>
    <span style={{ cursor: 'pointer', color: 'darkred', backgroundColor: 'lightgray', borderRadius: '5px', border: '1px solid black' }}>{ children }</span>
    </div>
  )
}
