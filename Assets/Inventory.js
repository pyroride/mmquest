#pragma strict

var star : GameObject;

function Start () 
{

}

function Update () 
{

}

function pickUpStar(star) 
{
	this.star = star;
	Debug.Log("Has Star");
}

function getStar() 
{
	return star;
}
function loseStar() 
{
	this.star = null;
	Debug.Log("Lost Star");
}