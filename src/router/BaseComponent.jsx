import React, {Component} from 'react';

/**
 * 获取函数字面量
 */
Function.prototype.getName = function () {
    return this.name || this
        .toString()
        .match(/function\s*([^(]*)\(/)[1]
}

/**
 *
 * @param {*目标函数} Target
 * @param {*目标名称} name
 * @param {*表述信息} descriptor
 */

export const BaseParentRouteConnent = (Target, name, descriptor) => (
        class extends Component {
                constructor(props) {
                    super(props);
                }
                render() {
                    const {
                        children,
                        ...props
                    } = this.props;
                    return (
                        <div>
                            <Target {...props}/>
                            <div className={Target.name + '-childRoutes'}>{children}</div>
                        </div>
                    );
                }
            }
)
// export const BaseComponent = (Target, name, descriptor) => {
//     descriptor = Object.getOwnPropertyDescriptor(Target, 'prototype')
//     var Cmp_ = descriptor.value
//     // console.log(originalMethod)
//      descriptor.value = (...args) => {
        
//         class FF extends Component {
//                 constructor(props) {
//                     super(props);
//                 }
//                 render() {
//                     const {
//                         children,
//                         ...props
//                     } = this.props;
//                     return (
//                         <div>
//                             <Target {...props}/>
//                             <div className={Target.name + '-childRoutes'}>{children}</div>
//                         </div>
//                     );
//                 }
//             }
//             return FF()
//      }
//     console.log(descriptor);
//     // return descriptor;
// }

/**
 *
 * @param {*目标组件} Comp
 * @param {*子集名称} childrenName
 */
export const BaseSubRouteConnent = (Comp, childrenName) => (class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            children,
            ...props
        } = this.props;
        return (
            <div>
                <Comp {...props}/>
                <div className={childrenName}>{children}</div>
            </div>
        );
    }
})

/**
 *
 * @param {*目标函数} Target
 * @param {*目标名称} name
 * @param {*表述信息} descriptor
 */
export const readonly = (target, name, descriptor) => {
    descriptor.writable = false;
    return descriptor;
}
