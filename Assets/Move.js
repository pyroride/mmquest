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
		rigidbody2D.velocity.y = speed;
		grahamAnimator.SetFloat("moveVert", speed);
	}
	else if (Input.GetKey(moveDown))
	{
		rigidbody2D.velocity.y = speed *-1;
		grahamAnimator.SetFloat("moveVert", speed *-1);
	}
	else if (Input.GetKey(moveLeft))
	{
		rigidbody2D.velocity.x = speed *-1;
		grahamAnimator.SetFloat("moveHor", speed *-1);
	}
	else if (Input.GetKey(moveRight))
	{
		rigidbody2D.velocity.x = speed;
		grahamAnimator.SetFloat("moveHor", speed);
	}
	else
	{
		rigidbody2D.velocity.y = 0;
		rigidbody2D.velocity.x = 0;
		grahamAnimator.SetFloat("moveHor", 0);
		grahamAnimator.SetFloat("moveVert", 0);
	}
}
