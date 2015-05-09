#pragma strict

var hasStar : boolean;

function Start () {

}

function Update () {

}

function getStar() {
	hasStar = true;
	Debug.Log("Has Star");
}

function loseStar() {
	hasStar = false;
	Debug.Log("Lost Star");
}