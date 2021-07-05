import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLinkThunk, loadLinkThunk } from "../redux/info/actions";

export const ShareLink = (props)=>{
    const [title,setTitle] = useState('');
    const [url,setUrl] = useState('');
    const links = useSelector(state=>{
        console.log('state',state);
        return state.linksStore.links;
    })
    const dispatch = useDispatch();
    const titleOnChange = (e)=>{
        setTitle(e.target.value)
    }
    const urlOnChange = (e)=>{
        setUrl(e.target.value);
    }
    const addLink = ()=>{
        let link = {
            url:url,
            title:title
        }
        dispatch(addLinkThunk(link))
    }
    const loadLink = ()=>{
        dispatch(loadLinkThunk());
    }
    useEffect(()=>{
        loadLink();
    },[])

    return (
        <div>
            <label>
                title:
                <input
                    onChange={titleOnChange}
                    value={title}
                    type='text'
                />
            </label>
            <label>
                Url:
                <input
                    onChange={urlOnChange}
                    value={url}
                    type='text'
                />
            </label>
            <button onClick={addLink}>add Link</button>
            <div>
                <h2>Link list:</h2>
                <ul>
                    {links.map((link,index)=>{
                        return (
                            <li
                                key={index}
                            >
                                {link.title} : {link.url}
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default ShareLink