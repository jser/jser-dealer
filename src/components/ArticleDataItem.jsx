"use strict";
import React from 'react';
import { DragDropMixin } from 'react-dnd';
import ItemTypes  from "./ItemType.js"
import ArticleDataStore from "../stores/ArticleDataStore.js"
export default React.createClass({
    mixins: [DragDropMixin],
    propTypes: {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        content: React.PropTypes.string.isRequired,
        tags: React.PropTypes.array,
        date: React.PropTypes.string,
        relatedLinks: React.PropTypes.arrayOf(React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired
        })),
        onClick: React.PropTypes.func,
        isReading: React.PropTypes.bool
    },
    componentWillMount: function () {
        ArticleDataStore.on("scrollToItem", (item) => {
            if (item.url !== this.props.url) {
                return
            }
            var node = this.getDOMNode();
            node.scrollIntoView();
        });
    },

    statics: {
        configureDragDrop(register) {
            register(ItemTypes.CARD, {
                dragSource: {
                    beginDrag(component) {
                        return {
                            item: {
                                url: component.props.url
                            }
                        };
                    }
                },
                dropTarget: {
                    acceptDrop(component, item) {
                        component.props.moveCard(item.url, component.props.url);
                    }
                }
            });
        }
    },
    render() {
        var className = this.props.isReading ? "is-reading" : "";
        className += " ArticleDataItem";
        return (
            <div {...this.dragSourceFor(ItemTypes.CARD)}
                {...this.dropTargetFor(ItemTypes.CARD)}
                className={className}>
                <a onClick={this.props.onClick}>{this.props.title} </a>
                <p className="content">{this.props.tags.join(",")} - {this.props.content}</p>
            </div>
        )
    }
});