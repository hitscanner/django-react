import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default class Create extends Component {
    render() {
        const form_style = {
            display: "flex",
            flexDirection: "column",
            textAlign: "right"
        }
        return (
            <div>
                <form style={form_style} onSubmit={this.props.handlingSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        margin="normal"
                        variant="outlined"
                        name='title'
                        value={this.props.title}
                        onChange={this.props.handlingChange}
                    />
                    <TextField
                        label="Input contents"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                        name='content'
                        value={this.props.content}
                        onChange={this.props.handlingChange}
                    />
                    <Button type="submit" color="primary" variant="contained">
                        글 작성
                    </Button>
                </form>
            </div>
        )
    }
}