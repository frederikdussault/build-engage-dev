module.exports = function(grunt) {

    var target = grunt.option('target');
    var parent_dir = 'themes/rdm_foundation/';

    grunt.initConfig({
        pkg: '<json:package.json>',
        concat: {
                cbnScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/canadianbusiness.com/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/canadianbusiness.com/components.js'
                },
                cbnStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/canadianbusiness.com/ComponentViews/**/*.base.scss',
                            'themes/canadianbusiness.com/ComponentViews/**/*.wide.scss',
                            'themes/canadianbusiness.com/ComponentViews/**/*.desktop.scss',
                            'themes/canadianbusiness.com/ComponentViews/**/*.tablet.scss',
                            'themes/canadianbusiness.com/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/canadianbusiness.com/components.scss',
                },
                cheScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/chatelaine.com/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/chatelaine.com/components.js'
                },
                cheStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/chatelaine.com/ComponentViews/**/*.base.scss',
                            'themes/chatelaine.com/ComponentViews/**/*.wide.scss',
                            'themes/chatelaine.com/ComponentViews/**/*.desktop.scss',
                            'themes/chatelaine.com/ComponentViews/**/*.tablet.scss',
                            'themes/chatelaine.com/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/chatelaine.com/components.scss',
                },
                flrScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/flare.com/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/flare.com/components.js'
                },
                flrStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/flare.com/ComponentViews/**/*.base.scss',
                            'themes/flare.com/ComponentViews/**/*.wide.scss',
                            'themes/flare.com/ComponentViews/**/*.desktop.scss',
                            'themes/flare.com/ComponentViews/**/*.tablet.scss',
                            'themes/flare.com/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/flare.com/components.scss',
                },
                chfScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/fr.chatelaine.com/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/fr.chatelaine.com/components.js'
                },
                chfStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/fr.chatelaine.com/ComponentViews/**/*.base.scss',
                            'themes/fr.chatelaine.com/ComponentViews/**/*.wide.scss',
                            'themes/fr.chatelaine.com/ComponentViews/**/*.desktop.scss',
                            'themes/fr.chatelaine.com/ComponentViews/**/*.tablet.scss',
                            'themes/fr.chatelaine.com/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/fr.chatelaine.com/components.scss',
                },
                chlScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/healthandlifestyle.ca/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/healthandlifestyle.ca/components.js'
                },
                chlStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/healthandlifestyle.ca/ComponentViews/**/*.base.scss',
                            'themes/healthandlifestyle.ca/ComponentViews/**/*.wide.scss',
                            'themes/healthandlifestyle.ca/ComponentViews/**/*.desktop.scss',
                            'themes/healthandlifestyle.ca/ComponentViews/**/*.tablet.scss',
                            'themes/healthandlifestyle.ca/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/healthandlifestyle.ca/components.scss',
                },
                lacScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/lactualite.com/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/lactualite.com/components.js'
                },
                lacStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/lactualite.com/ComponentViews/**/*.base.scss',
                            'themes/lactualite.com/ComponentViews/**/*.wide.scss',
                            'themes/lactualite.com/ComponentViews/**/*.desktop.scss',
                            'themes/lactualite.com/ComponentViews/**/*.tablet.scss',
                            'themes/lactualite.com/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/lactualite.com/components.scss',
                },
                llScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/louloumagazine.com/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/louloumagazine.com/components.js'
                },
                llStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/louloumagazine.com/ComponentViews/**/*.base.scss',
                            'themes/louloumagazine.com/ComponentViews/**/*.wide.scss',
                            'themes/louloumagazine.com/ComponentViews/**/*.desktop.scss',
                            'themes/louloumagazine.com/ComponentViews/**/*.tablet.scss',
                            'themes/louloumagazine.com/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/louloumagazine.com/components.scss',
                },
                macScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/macleans.ca/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/macleans.ca/components.js'
                },
                macStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/macleans.ca/ComponentViews/**/*.base.scss',
                            'themes/macleans.ca/ComponentViews/**/*.wide.scss',
                            'themes/macleans.ca/ComponentViews/**/*.desktop.scss',
                            'themes/macleans.ca/ComponentViews/**/*.tablet.scss',
                            'themes/macleans.ca/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/macleans.ca/components.scss',
                },
                monScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/moneysense.ca/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/moneysense.ca/components.js'
                },
                monStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/moneysense.ca/ComponentViews/**/*.base.scss',
                            'themes/moneysense.ca/ComponentViews/**/*.wide.scss',
                            'themes/moneysense.ca/ComponentViews/**/*.desktop.scss',
                            'themes/moneysense.ca/ComponentViews/**/*.tablet.scss',
                            'themes/moneysense.ca/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/moneysense.ca/components.scss',
                },
                tdpScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/todaysparent.com/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/todaysparent.com/components.js'
                },
                tdpStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/todaysparent.com/ComponentViews/**/*.base.scss',
                            'themes/todaysparent.com/ComponentViews/**/*.wide.scss',
                            'themes/todaysparent.com/ComponentViews/**/*.desktop.scss',
                            'themes/todaysparent.com/ComponentViews/**/*.tablet.scss',
                            'themes/todaysparent.com/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/todaysparent.com/components.scss',
                },
                vmwScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/vivremieuxwalmart.ca/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/vivremieuxwalmart.ca/components.js'
                },
                vmwStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/vivremieuxwalmart.ca/ComponentViews/**/*.base.scss',
                            'themes/vivremieuxwalmart.ca/ComponentViews/**/*.wide.scss',
                            'themes/vivremieuxwalmart.ca/ComponentViews/**/*.desktop.scss',
                            'themes/vivremieuxwalmart.ca/ComponentViews/**/*.tablet.scss',
                            'themes/vivremieuxwalmart.ca/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/vivremieuxwalmart.ca/components.scss',
                },
                wlbScripts: {
                    src: [
                        parent_dir + 'ComponentViews/**/*.js',
                        'themes/walmartlivebetter.ca/ComponentViews/**/*.js'
                    ],
                    dest: 'themes/walmartlivebetter.ca/components.js'
                },
                wlbStyles: {
                    src: [
                            parent_dir + 'ComponentViews/**/*.base.scss',
                            parent_dir + 'ComponentViews/**/*.wide.scss',
                            parent_dir + 'ComponentViews/**/*.desktop.scss',
                            parent_dir + 'ComponentViews/**/*.tablet.scss',
                            parent_dir + 'ComponentViews/**/*.mobile.scss',
                            'themes/walmartlivebetter.ca/ComponentViews/**/*.base.scss',
                            'themes/walmartlivebetter.ca/ComponentViews/**/*.wide.scss',
                            'themes/walmartlivebetter.ca/ComponentViews/**/*.desktop.scss',
                            'themes/walmartlivebetter.ca/ComponentViews/**/*.tablet.scss',
                            'themes/walmartlivebetter.ca/ComponentViews/**/*.mobile.scss'
                            ],
                    dest: 'themes/walmartlivebetter.ca/components.scss',
                },
            },
        compass: {
            cbn: {
                options: {
                    sassDir: 'themes/canadianbusiness.com/',
                    cssDir: 'themes/canadianbusiness.com/',
                    specify: 'themes/canadianbusiness.com/components.scss',
                    noLineComments : true
                }
            },
            che: {
                options: {
                    sassDir: 'themes/chatelaine.com/',
                    cssDir: 'themes/chatelaine.com/',
                    specify: 'themes/chatelaine.com/components.scss',
                    noLineComments : true
                }
            },
            flr: {
                options: {
                    sassDir: 'themes/flare.com/',
                    cssDir: 'themes/flare.com/',
                    specify: 'themes/flare.com/components.scss',
                    noLineComments : true
                }
            },
            chf: {
                options: {
                    sassDir: 'themes/fr.chatelaine.com/',
                    cssDir: 'themes/fr.chatelaine.com/',
                    specify: 'themes/fr.chatelaine.com/components.scss',
                    noLineComments : true
                }
            },
            chl: {
                options: {
                    sassDir: 'themes/healthandlifestyle.ca/',
                    cssDir: 'themes/healthandlifestyle.ca/',
                    specify: 'themes/healthandlifestyle.ca/components.scss',
                    noLineComments : true
                }
            },
            lac: {
                options: {
                    sassDir: 'themes/lactualite.com/',
                    cssDir: 'themes/lactualite.com/',
                    specify: 'themes/lactualite.com/components.scss',
                    noLineComments : true
                }
            },
            ll: {
                options: {
                    sassDir: 'themes/louloumagazine.com/',
                    cssDir: 'themes/louloumagazine.com/',
                    specify: 'themes/louloumagazine.com/components.scss',
                    noLineComments : true
                }
            },
            mac: {
                options: {
                    sassDir: 'themes/macleans.ca/',
                    cssDir: 'themes/macleans.ca/',
                    specify: 'themes/macleans.ca/components.scss',
                    noLineComments : true
                }
            },
            mon: {
                options: {
                    sassDir: 'themes/moneysense.ca/',
                    cssDir: 'themes/moneysense.ca/',
                    specify: 'themes/moneysense.ca/components.scss',
                    noLineComments : true
                }
            },
            tdp: {
                options: {
                    sassDir: 'themes/todaysparent.com/',
                    cssDir: 'themes/todaysparent.com/',
                    specify: 'themes/todaysparent.com/components.scss',
                    noLineComments : true
                }
            },
            vmw: {
                options: {
                    sassDir: 'themes/vivremieuxwalmart.ca/',
                    cssDir: 'themes/vivremieuxwalmart.ca/',
                    specify: 'themes/vivremieuxwalmart.ca/components.scss',
                    noLineComments : true
                }
            },
            wlb: {
                options: {
                    sassDir: 'themes/walmartlivebetter.ca/',
                    cssDir: 'themes/walmartlivebetter.ca/',
                    specify: 'themes/walmartlivebetter.ca/components.scss',
                    noLineComments : true
                }
            },
        },

        cssmin: {
            cbn: {
                src: 'themes/canadianbusiness.com/components.css',
                dest: 'themes/canadianbusiness.com/components.min.css'
            },
            che: {
                src: 'themes/chatelaine.com/components.css',
                dest: 'themes/chatelaine.com/components.min.css'
            },
            flr: {
                src: 'themes/flare.com/components.css',
                dest: 'themes/flare.com/components.min.css'
            },
            chf: {
                src: 'themes/fr.chatelaine.com/components.css',
                dest: 'themes/fr.chatelaine.com/components.min.css'
            },
            chl: {
                src: 'themes/healthandlifestyle.ca/components.css',
                dest: 'themes/healthandlifestyle.ca/components.min.css'
            },
            lac: {
                src: 'themes/lactualite.com/components.css',
                dest: 'themes/lactualite.com/components.min.css'
            },
            ll: {
                src: 'themes/louloumagazine.com/components.css',
                dest: 'themes/louloumagazine.com/components.min.css'
            },
            mac: {
                src: 'themes/macleans.ca/components.css',
                dest: 'themes/macleans.ca/components.min.css'
            },
            mon: {
                src: 'themes/moneysense.ca/components.css',
                dest: 'themes/moneysense.ca/components.min.css'
            },
            tdp: {
                src: 'themes/todaysparent.com/components.css',
                dest: 'themes/todaysparent.com/components.min.css'
            },
            vmw: {
                src: 'themes/vivremieuxwalmart.ca/components.css',
                dest: 'themes/vivremieuxwalmart.ca/components.min.css'
            },
            wlb: {
                src: 'themes/walmartlivebetter.ca/components.css',
                dest: 'themes/walmartlivebetter.ca/components.min.css'
            },
        },
        uglify: {
            cbn: {
                files: {
                    'themes/canadianbusiness.com/components.min.js' : ['themes/canadianbusiness.com/components.js']
                }
            },
            che: {
                files: {
                    'themes/chatelaine.com/components.min.js' : ['themes/chatelaine.com/components.js']
                }
            },
            flr: {
                files: {
                    'themes/flare.com/components.min.js' : ['themes/flare.com/components.js']
                }
            },
            chf: {
                files: {
                    'themes/fr.chatelaine.com/components.min.js' : ['themes/fr.chatelaine.com/components.js']
                }
            },
            chl: {
                files: {
                    'themes/healthandlifestyle.ca/components.min.js' : ['themes/healthandlifestyle.ca/components.js']
                }
            },
            lac: {
                files: {
                    'themes/lactualite.com/components.min.js' : ['themes/lactualite.com/components.js']
                }
            },
            ll: {
                files: {
                    'themes/louloumagazine.com/components.min.js' : ['themes/louloumagazine.com/components.js']
                }
            },
            mac: {
                files: {
                    'themes/macleans.ca/components.min.js' : ['themes/macleans.ca/components.js']
                }
            },
            mon: {
                files: {
                    'themes/moneysense.ca/components.min.js' : ['themes/moneysense.ca/components.js']
                }
            },
            tdp: {
                files: {
                    'themes/todaysparent.com/components.min.js' : ['themes/todaysparent.com/components.js']
                }
            },
            vmw: {
                files: {
                    'themes/vivremieuxwalmart.ca/components.min.js' : ['themes/vivremieuxwalmart.ca/components.js']
                }
            },
            wlb: {
                files: {
                    'themes/walmartlivebetter.ca/components.min.js' : ['themes/walmartlivebetter.ca/components.js']
                }
            },
        },
        watch: {
                cbn: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/canadianbusiness.com/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/canadianbusiness.com/ComponentViews/**/*.scss'
                    ],
                    tasks: ['cbnConcat']
                },
                che: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/chatelaine.com/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/chatelaine.com/ComponentViews/**/*.scss'
                    ],
                    tasks: ['cheConcat']
                },
                flr: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/flare.com/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/flare.com/ComponentViews/**/*.scss'
                    ],
                    tasks: ['flrConcat']
                },
                chf: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/fr.chatelaine.com/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/fr.chatelaine.com/ComponentViews/**/*.scss'
                    ],
                    tasks: ['chfConcat']
                },
                chl: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/healthandlifestyle.ca/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/healthandlifestyle.ca/ComponentViews/**/*.scss'
                    ],
                    tasks: ['chlConcat']
                },
                lac: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/lactualite.com/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/lactualite.com/ComponentViews/**/*.scss'
                    ],
                    tasks: ['lacConcat']
                },
                ll: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/louloumagazine.com/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/louloumagazine.com/ComponentViews/**/*.scss'
                    ],
                    tasks: ['llConcat']
                },
                mac: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/macleans.ca/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/macleans.ca/ComponentViews/**/*.scss'
                    ],
                    tasks: ['macConcat']
                },
                mon: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/moneysense.ca/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/moneysense.ca/ComponentViews/**/*.scss'
                    ],
                    tasks: ['monConcat']
                },
                tdp: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/todaysparent.com/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/todaysparent.com/ComponentViews/**/*.scss'
                    ],
                    tasks: ['tdpConcat']
                },
                vmw: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/vivremieuxwalmart.ca/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/vivremieuxwalmart.ca/ComponentViews/**/*.scss'
                    ],
                    tasks: ['vmwConcat']
                },
                wlb: {
                    files : [
                    parent_dir + 'ComponentViews/**/*.js',
                    'themes/walmartlivebetter.ca/ComponentViews/**/*.js',
                    parent_dir + 'ComponentViews/**/*.scss',
                    'themes/walmartlivebetter.ca/ComponentViews/**/*.scss'
                    ],
                    tasks: ['wlbConcat']
                },
        },
        concurrent: {
            target: {
                tasks: ['watch:cbn', 'watch:che', 'watch:flr','watch:chf','watch:chl','watch:lac','watch:ll','watch:mac','watch:mon','watch:tdp','watch:vmw','watch:wlb'],
                options: {
                    logConcurrentOutput: true,
                    limit: 20
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'compass', 'cssmin', 'uglify', 'concurrent:target']);
    grunt.registerTask('cbnConcat', ['concat:cbnScripts','concat:cbnStyles','compass:cbn', 'cssmin:cbn', 'uglify:cbn']);
    grunt.registerTask('cheConcat', ['concat:cheScripts','concat:cheStyles','compass:che', 'cssmin:che', 'uglify:che']);
    grunt.registerTask('flrConcat', ['concat:flrScripts','concat:flrStyles','compass:flr', 'cssmin:flr', 'uglify:flr']);
    grunt.registerTask('chfConcat', ['concat:chfScripts','concat:chfStyles','compass:chf', 'cssmin:chf', 'uglify:chf']);
    grunt.registerTask('chlConcat', ['concat:chlScripts','concat:chlStyles','compass:chl', 'cssmin:chl', 'uglify:chl']);
    grunt.registerTask('lacConcat', ['concat:lacScripts','concat:lacStyles','compass:lac', 'cssmin:lac', 'uglify:lac']);
    grunt.registerTask('llConcat', ['concat:llScripts','concat:llStyles','compass:ll', 'cssmin:ll', 'uglify:ll']);
    grunt.registerTask('macConcat', ['concat:macScripts','concat:macStyles','compass:mac', 'cssmin:mac', 'uglify:mac']);
    grunt.registerTask('monConcat', ['concat:monScripts','concat:monStyles','compass:mon', 'cssmin:mon', 'uglify:mon']);
    grunt.registerTask('tdpConcat', ['concat:tdpScripts','concat:tdpStyles','compass:tdp', 'cssmin:tdp', 'uglify:tdp']);
    grunt.registerTask('vmwConcat', ['concat:vmwScripts','concat:vmwStyles','compass:vmw', 'cssmin:vmw', 'uglify:vmw']);
    grunt.registerTask('wlbConcat', ['concat:wlbScripts','concat:wlbStyles','compass:wlb', 'cssmin:wlb', 'uglify:wlb']);
};