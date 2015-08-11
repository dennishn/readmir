(function() {
	'use strict';

	angular.module('generators')
		.constant('Generators', {

			/*
				Generator types:
				'base': the root generator
				'basic': a sub generator which advanced generators uses
				'advanced': a sub generator which uses one or more basic generators

				Generator uses:
				An array of subgenerator names that a generator uses

				Generator tags:
				'angular', 'html', 'scss'
			 */
			coreReadme: {
				filePath: 'readme.md',
			},
			generators: [
				{
					slug: 'app',
					name: 'nodes',
					filePath: 'app/readme.md',
					type: 'base',
					uses: [],
					tags: ['angular']
				},
				{
					slug: 'child-state',
					name: 'nodes:child-state',
					filePath: 'child-state/readme.md',
					type: 'advanced',
					uses: ['controller', 'html', 'scss'],
					tags: ['angular', 'html', 'scss']
				},
				{
					slug: 'component',
					name: 'nodes:component',
					filePath: 'component/readme.md',
					type: 'advanced',
					uses: ['module', 'directive', 'html', 'scss'],
					tags: ['angular', 'html', 'scss']
				},
				{
					slug: 'constant',
					name: 'nodes:constant',
					filePath: 'constant/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'controller',
					name: 'nodes:controller',
					filePath: 'controller/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'decorator',
					name: 'nodes:decorator',
					filePath: 'decorator/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'directive',
					name: 'nodes:directive',
					filePath: 'directive/readme.md',
					type: 'basic',
					uses: ['module', 'html', 'scss'],
					tags: ['angular', 'html', 'scss']
				},
				{
					slug: 'factory',
					name: 'nodes:factory',
					filePath: 'factory/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'filter',
					name: 'nodes:filter',
					filePath: 'filter/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'font',
					name: 'nodes:font',
					filePath: 'font/readme.md',
					type: 'basic',
					uses: [],
					tags: ['scss']
				},
				{
					slug: 'html',
					name: 'nodes:html',
					filePath: 'html/readme.md',
					type: 'basic',
					uses: [],
					tags: ['html']
				},
				{
					slug: 'model',
					name: 'nodes:model',
					filePath: 'model/readme.md',
					type: 'advanced',
					uses: ['module', 'factory', 'service'],
					tags: ['angular']
				},
				{
					slug: 'module',
					name: 'nodes:module',
					filePath: 'module/readme.md',
					type: 'basic',
					uses: [],
					tags: ['angular']
				},
				{
					slug: 'provider',
					name: 'nodes:provider',
					filePath: 'provider/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'route',
					name: 'nodes:route',
					filePath: 'route/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'scss',
					name: 'nodes:scss',
					filePath: 'scss/readme.md',
					type: 'basic',
					uses: [],
					tags: ['scss']
				},
				{
					slug: 'service',
					name: 'nodes:service',
					filePath: 'service/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				},
				{
					slug: 'state',
					name: 'nodes:state',
					filePath: 'state/readme.md',
					type: 'advanced',
					uses: ['module', 'route', 'controller', 'html', 'scss'],
					tags: ['angular', 'html', 'scss']
				},
				{
					slug: 'value',
					name: 'nodes:value',
					filePath: 'value/readme.md',
					type: 'basic',
					uses: ['module'],
					tags: ['angular']
				}
			]
		});
})();