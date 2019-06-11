import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    modal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 75,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    modalButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    }
});

class SimpleModal extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;
        console.log(selectedValue);
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                onClose={this.handleClose}
                {...other}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <Typography variant="h4" id="modal-title">{selectedValue.name}</Typography>
                    <br/>
                    <Typography variant="h6" id="simple-modal-description">{selectedValue.description}</Typography>
                    <br/>
                    <div className={classes.modalButtons}>
                        <Button variant='contained' color='primary' size='large' onClick={this.props.handleClickOpen}>New Idea</Button>
                        <a target='_blank' href={selectedValue.html_url}><Button variant='contained' color='primary' size='large'>Github</Button></a>
                    </div>
                </div>
            </Modal>
        );
    }
  }
  
  SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.object.isRequired,
  };
  
  // We need an intermediary variable for handling the recursive nesting.
  const SimpleModalWrapped = withStyles(styles)(SimpleModal);
  
  export default SimpleModalWrapped;