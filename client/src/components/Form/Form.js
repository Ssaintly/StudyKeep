import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";

import useStyles from './styles';
import { createPost , updatePost} from '../../actions/posts';
// import { updatePost } from "../../../../server/controllers/notes";
  

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({creator: '', title:'', content:'', tags:'', selectedFile:''});

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null );
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {

            dispatch(updatePost(currentId, postData));

        }
        else{
            dispatch(createPost(postData)); 
        }
        clear();
        
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title:'', content:'', tags:'', selectedFile:''});

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Editing' : 'Create' } a Note</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <TextField name="content" variant="outlined" label="Content" fullWidth multiline rows={4} value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth >Done!</Button>
            <Button className={classes.erase} variant="contained" size="small" onClick={clear} fullWidth >Erase</Button>
            </form>
        </Paper>
    );
}


export default Form;