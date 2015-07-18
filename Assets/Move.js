#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;

var speed : float = 10;

var grahamAnimator : Animator;

function Start ()
{
	grahamAnimator = GetComponent(Animator);
}

function FixedUpdate ()
{
	if (Input.GetKey(moveUp))
	{
		GetComponent.<Rigidbody2D>().velocity.y = speed;
		grahamAnimator.SetFloat("moveVert", speed);
	}
	else if (Input.GetKey(moveDown))
	{
		GetComponent.<Rigidbody2D>().velocity.y = speed *-1;
		grahamAnimator.SetFloat("moveVert", speed *-1);
	}
	else if (Input.GetKey(moveLeft))
	{
		GetComponent.<Rigidbody2D>().velocity.x = speed *-1;
		grahamAnimator.SetFloat("moveHor", speed *-1);
	}
	else if (Input.GetKey(moveRight))
	{
		GetComponent.<Rigidbody2D>().velocity.x = speed;
		grahamAnimator.SetFloat("moveHor", speed);
	}
	else
	{
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		grahamAnimator.SetFloat("moveHor", 0);
		grahamAnimator.SetFloat("moveVert", 0);
	}
}
