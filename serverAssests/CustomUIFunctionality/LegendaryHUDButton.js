import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';








export default class LegendaryHUDButton extends Component 
{
  
  constructor(props) 
  {
    super(props)
    
    this.state = { hover : null }
  }
  
  render() 
  {
    const { legendaryButtonData, hoverStyle } = this.props
    
    return (
      <TouchableOpacity
        activeOpacity = { 1 }
        
        style = { [{ cursor: 'inherit' }, legendaryButtonData, this.state.hover ? hoverStyle : {}] }
        
        onMouseEnter = { () => {
             this.setState({ hover : true }) 
             
             const hoverAction = hoverStyle.legendaryHoverAction;
             
             if (hoverAction != null && hoverAction.hoverFunc != null) 
             { 
                  hoverAction.hoverFuncInput.currentHoverState = true
                  
                  hoverAction.hoverFunc(hoverAction.hoverFuncInput)
             }
        }}
        
        onMouseLeave = { () => { 
             this.setState({ hover : false }) 
             
             const hoverAction = hoverStyle.legendaryHoverAction;
             
             if (hoverAction != null && hoverAction.hoverFunc != null) 
             { 
                  hoverAction.hoverFuncInput.currentHoverState = false
                  
                  hoverAction.hoverFunc(hoverAction.hoverFuncInput) 
             }
        }}
      >
           
           
           <TouchableOpacity { ...this.props } />
      </TouchableOpacity>
    )
  }
}

LegendaryHUDButton.propTypes = 
{
  hoverStyle : PropTypes.shape({}),

  legendaryButtonData : PropTypes.shape({}),
}