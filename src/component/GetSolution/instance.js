
import Navbar from '../navbar/navbar'
import SolutionInatance  from './component/instanceOld'
import SimpleBackdrop from '../../loader/loading'
import { useSelector,useDispatch  } from 'react-redux'


const InstaneList = ()=>{
  
    const loader = useSelector((state)=>state.loader.loader);

//   alert(loader)
    return(
        <>
        <Navbar   />
        
        {loader&&<SimpleBackdrop />}
        <SolutionInatance />
        </>
    )
}

export default InstaneList