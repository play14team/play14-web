import { CodegenConfig } from "@graphql-codegen/cli"

const STRAPI_SERVER =
	process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"

const config: CodegenConfig = {
	overwrite: true,
	schema: STRAPI_SERVER + "/graphql",
	documents: [
		"src/app/**/*.tsx",
		"src/components/**/*.tsx",
		"src/graphql/**/*.graphql",
	],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		"src/models/": {
			preset: "client",
			plugins: [
				{
					add: {
						content: "/* tslint:disable */",
					},
				},
			],
		},
	},
}

export default config
