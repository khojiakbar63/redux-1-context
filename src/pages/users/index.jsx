import { useDispatch, useSelector } from 'react-redux'
import {changeStr} from '../../redux/reducer/message'

export const Users = () => {
  const dispatch = useDispatch()
  const str = useSelector((state) => state.message.value)
  return (
    <>
    <h1>Users</h1>
    <h2>Message: {str}</h2>
    <button onClick={()=>{dispatch(changeStr('Bye bye World'))}}>Change String</button>
    </>
  )
}
