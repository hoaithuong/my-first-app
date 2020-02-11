import React from 'react';
import { Router as ReactRouter } from 'react-router';

import utils from './../utils';
import context from './../context';

import HomeRoute from './HomeRoute';
import LoginRoute from './LoginRoute';

export default class Router extends ReactRouter {
    static childContextTypes = {
        authenticated: React.PropTypes.bool,
        user: React.PropTypes.object
    };
  
    static defaultProps = ReactRouter.defaultProps;
  
    state = {
        authenticated: false,
        user: undefined
    };
  
    markedRoutes = {
        home: {
            type: HomeRoute,
            authenticated: {
            props: null
        },
            notAuthenticated: {
            props: null
        }
    },
        login: {
            type: LoginRoute,
            props: null
        }
    };
    constructor() {
        super(...arguments);
    
        if (this.props.routes) {
            // The reason we wrap in a div is because we just need to have a root element.
            this._mapMarkedRoutes(<div>{this.props.routes}</div>);
        } else {
            this._mapMarkedRoutes(this);
        }
    
        this.sessionChangeListener = this._setSessionState.bind(this);
    
        context.setRouter(this);
    }
    
    _mapMarkedRoutes(routes) {
        let markedRoutes = this.markedRoutes;
    
        utils.deepForEach(routes, (node, parent) => {
            // Try and map the route node to a marked route.
            for (var routeName in markedRoutes) {
                var route = markedRoutes[routeName];
                if (node.type === route.type) {
                    var markedRoute = markedRoutes[routeName];
                
                    if (node.type === HomeRoute) {
                        if (parent.type === AuthenticatedRoute) {
                            markedRoute = markedRoute.authenticated;
                        } else {
                            markedRoute = markedRoute.notAuthenticated;
                        }
                    }
                
                    markedRoute.props = node.props;
                    break;
                }
            }
        });
    }

    getHomeRoute() {
        return this.markedRoutes.home.notAuthenticated.props;
    }

    getLoginRoute() {
        return this.markedRoutes.login.props;
    }
    
    _setSessionState(user) {
        this.setState({
            authenticated: user !== undefined,
            user: user
        });
    }
        
    componentDidMount() {
        this._setSessionState(context.sessionStore.get());
        context.sessionStore.addListener('changed', this.sessionChangeListener);
    }
        
    componentWillUnmount() {
        super.componentWillUnmount();
        context.sessionStore.removeListener('changed', this.sessionChangeListener);
    }
        
    getChildContext() {
        return {
            authenticated: this.state.authenticated,
            user: this.state.user
        };
    }
}