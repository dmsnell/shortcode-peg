'use strict'

const fs = require( 'fs' )
const peg = require( 'pegjs' )

const grammar = fs.readFileSync( './grammar.peg', 'utf8' )
const testDoc = fs.readFileSync( './testDoc.html', 'utf8' )

const l = m => console.log( m )

let parser, parsed

try {
	parser = peg.buildParser( grammar )
} catch ( e ) {
	l( e.message )
}

try {
	parsed = parser.parse( testDoc )
} catch ( e ) {
	l( e.message )
	l( e.location )
}

l( parsed )
