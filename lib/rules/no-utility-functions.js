'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var bannedMethods = [
    'copy',
    'element',
    'equals',
    'extend',
    'forEach',
    'fromJson',
    'identity',
    'isArray',
    'isDate',
    'isDefined',
    'isElement',
    'isFunction',
    'isNumber',
    'isObject',
    'isString',
    'isUndefined',
    'lowercase',
    'merge',
    'noop',
    'toJson',
    'uppercase'
]
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Prevent usage of AngularJS utility methods not ported to Angular (2)',
            category: 'Best Practices',
            recommended: true
        },
        schema: []
    },

    create: function(context) {

        return {

            MemberExpression: function(node) {

                if (node.object.name === 'angular' && context.options.length > 0) {
                    var usedMethod = node.property.name;
                    var bannedMethodUsed = bannedMethods.indexOf(usedMethod) > -1;

                    if (bannedMethodUsed) {

                        context.report({
                            node: node,
                            message: 'Utility function {{usedMethod}} is not used in Angular (2). Please us lodash/underscore or native implementation instead.',
                            data: {
                                usedMethod: usedMethod
                            }
                        });
                    }
                }
            }
        }
    }
  };